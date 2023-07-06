/* eslint-disable no-useless-escape */
import React, { useState, useEffect } from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Checkbox from '@mui/material/Checkbox';
import FormControl from '@mui/material/FormControl';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormGroup from '@mui/material/FormGroup';
import FormHelperText from '@mui/material/FormHelperText';
import FormLabel from '@mui/material/FormLabel';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import Select from '@mui/material/Select';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import { deepmerge } from '@mui/utils';
import ButtonSubmit from '../buttons/ButtonSubmit';
import { mapMuiBtnSubmitToProps } from '../../lib/mapToProps';
import { determineColor } from '../../lib/helperFunctions';

function encode(data) {
  return Object.keys(data)
    .map((key) => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`)
    .join('&');
}

function FormNetlify({ titleAlignment, heading, headingLevel, form, style }) {
  const {
    backgroundColor: fieldBgColor,
    fieldBgHoverColor,
    focusedColor,
    borderRadius: fieldBorderRadius,
    btnStyle,
    btnAlignment,
    fieldVariant: variant,
    labelColor,
    inputColor,
    selectorColor,
  } = style;

  const { formFields, name, subject, thankYou, submitBtn } = form;

  const componentTheme = {
    palette: {
      primary: {
        main: determineColor(focusedColor.color), // mui-focused class color (applies to border and checkbox, select, radio label color)
      },
      secondary: {
        main: determineColor(selectorColor.color), // selector color (checkbox icon and radio icon)
      },
      text: {
        primary: determineColor(inputColor.color), // controls input text and placeholder text and hover border color
        secondary: determineColor(labelColor.color), // control label text, helper text, and the border of checkbox and radio icons
      },
    },
    components: {
      MuiOutlinedInput: {
        styleOverrides: {
          root: {
            borderRadius: fieldBorderRadius, // border radius change for outlined variant
            backgroundColor: determineColor(fieldBgColor.color), // background color change for outlined variant
          },
          input: {
            padding: '14px',
          },
          multiline: {
            padding: '14px',
          },
        },
      },
      MuiFilledInput: {
        styleOverrides: {
          root: {
            backgroundColor: determineColor(fieldBgColor.color), // background color for filled variant
            '&:hover': {
              backgroundColor: determineColor(fieldBgHoverColor.color), // background color on hover for filled variant
            },
            '@media (hover: none)': {
              backgroundColor: determineColor(fieldBgColor.color), // background color for filled variant when media has no hover
              '&:hover': {
                backgroundColor: determineColor(fieldBgColor.color), // background color on hover for filled variant when media has no hover
              },
            },
            '&.Mui-focused': {
              backgroundColor: determineColor(fieldBgColor.color), // background color when clicked into the field
            },
          },
        },
      },
      MuiFormControlLabel: {
        styleOverrides: {
          root: {
            color: determineColor(labelColor.color),
          },
        },
      },
    },
  };

  const [state, setState] = useState({});
  const [requiredRadioFields, setRequiredRadioFields] = useState(null);
  const [requiredCheckboxFields, setRequiredCheckboxFields] = useState(null);
  const [errorMsgs, setErrorMsgs] = useState({});
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    const requirements = formFields
      .filter((field) => field.required && field._type === 'radio')
      .map((field) => field.id);
    setRequiredRadioFields(requirements);
  }, [formFields]);

  useEffect(() => {
    const requirements = formFields.filter((field) => field.required && field._type === 'checkbox');
    setRequiredCheckboxFields(requirements);
  }, [formFields]);

  let isValid = true;

  const handleChange = (e) => {
    setState({ ...state, [e.target.name]: e.target.value });
    setErrorMsgs({ ...errorMsgs, [e.target.name]: '' });
  };

  const handleCheckboxChange = (e, key) => {
    setState({ ...state, [e.target.name]: e.target.checked });
    // const key = e.target.closest('fieldset').id;
    setErrorMsgs({ ...errorMsgs, [key]: '' });
  };

  const fieldValidation = (element) => {
    if (element.checkValidity() === false) {
      setErrorMsgs({ ...errorMsgs, [element.name]: element.validationMessage });
      return;
    }
    if (element.hasAttribute('required') && element.value.trim() === '') {
      setErrorMsgs({ ...errorMsgs, [element.name]: 'Please enter text in the field.' });
      return;
    }
    setErrorMsgs({ ...errorMsgs, [element.name]: '' });
  };

  const selectValidation = (element) => {
    if (element.hasAttribute('required') && !state[element.name]) {
      setErrorMsgs({ ...errorMsgs, [element.name]: 'Please make a selection.' });
      return;
    }
    setErrorMsgs({ ...errorMsgs, [element.name]: '' });
  };

  const sendForm = (thisForm) => {
    const inputs = thisForm.elements;
    const errors = {};

    // eslint-disable-next-line no-plusplus
    for (let index = 0; index < inputs.length; index++) {
      const element = inputs[index];
      if (element.name !== 'bot-field' && element.name !== 'form-name') {
        if (element.validity.valid === false) {
          isValid = false;
          errors[element.name] = element.validationMessage;
        }
        if (element.hasAttribute('required') && element.value && element.value.trim() === '') {
          isValid = false;
          errors[element.name] = 'Please enter text in the field.';
        }
        if (
          element.hasAttribute('required') &&
          element.tagName === 'SELECT' &&
          !state[element.name]
        ) {
          errors[element.name] = 'Please make a selection.';
        }
      }
    }

    // eslint-disable-next-line no-plusplus
    for (let index = 0; index < requiredRadioFields.length; index++) {
      if (!state[requiredRadioFields[index]]) {
        errors[requiredRadioFields[index]] = 'Please make a selection.';
      }
    }

    // eslint-disable-next-line no-plusplus
    for (let index = 0; index < requiredCheckboxFields.length; index++) {
      let error = true;
      const { options } = requiredCheckboxFields[index];

      options.forEach((option) => {
        if (state[option.value]) {
          error = false;
        }
      });

      if (error) {
        errors[requiredCheckboxFields[index].id] = 'Error: checkbox not checked.';
      }
    }

    setErrorMsgs({ ...errorMsgs, ...errors });

    if (isValid) {
      fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: encode({
          'form-name': thisForm.getAttribute('name'),
          'bot-field': thisForm.elements['bot-field'].value,
          // eslint-disable-next-line dot-notation
          subject: thisForm.elements['subject'].value,
          ...state,
        }),
      })
        .then(() => {
          thisForm.reset();
          setState({});
          setSuccess(true);
        })
        // should set up also error message as well should the form fail to send.
        .catch((error) => alert(error));
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const myForm = event.currentTarget;

    setSuccess(false);
    sendForm(myForm);
  };

  return (
    <ThemeProvider theme={(theme) => createTheme(deepmerge(theme, componentTheme))}>
      <Box sx={{ boxShadow: 5, p: 4, bgcolor: 'background.paper' }}>
        <Box sx={{ textAlign: titleAlignment, color: determineColor(labelColor.color) }}>
          <Typography variant={headingLevel} sx={{ marginBottom: 4 }}>
            {heading}
          </Typography>
        </Box>

        <form
          name={name}
          method="POST"
          data-netlify="true"
          // eslint-disable-next-line react/no-unknown-property
          netlify-honeypot="bot-field"
          noValidate
          onSubmit={handleSubmit}
          id={name}
          autoComplete="off"
        >
          <Box component="p" className="hidden" sx={{ display: 'none' }}>
            {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
            <label>
              Don&apos;t fill this out if you&apos;re human:
              <input name="bot-field" onChange={handleChange} />
            </label>
          </Box>

          {success && <p>{thankYou}</p>}

          <input type="hidden" name="form-name" value={name} />
          <input type="hidden" name="subject" value={subject} />
          {formFields.map((input) => {
            const { _type, _key } = input;

            switch (_type) {
              case 'checkbox':
                return (
                  <FormControl
                    component={input.options.length > 1 ? 'fieldset' : 'div'}
                    fullWidth
                    key={_key}
                    sx={{ marginBottom: 4 }}
                    error={!!errorMsgs[input.id]}
                    id={input.id}
                  >
                    <FormLabel
                      sx={{ marginBottom: 1 }}
                      component={input.options.length > 1 ? 'legend' : 'label'}
                    >
                      {input.label}
                    </FormLabel>
                    <FormGroup>
                      {input.options.map((option) => {
                        const key = option.value;
                        const isChecked = !!state[key];

                        return (
                          <FormControlLabel
                            key={option._key}
                            control={
                              <Checkbox
                                name={option.value}
                                checked={isChecked}
                                onChange={(event) => handleCheckboxChange(event, input.id)}
                                value={isChecked.toString()}
                                inputProps={{ 'aria-label': option.label }}
                              />
                            }
                            label={option.label}
                          />
                        );
                      })}
                    </FormGroup>
                    <FormHelperText error={!!errorMsgs[input.id]}>
                      {errorMsgs[input.id] ? errorMsgs[input.id] : input.helperText}
                    </FormHelperText>
                  </FormControl>
                );
              case 'radio':
                return (
                  <FormControl
                    sx={{ marginBottom: 4 }}
                    component="fieldset"
                    fullWidth
                    key={_key}
                    error={!!errorMsgs[input.id]}
                  >
                    <FormLabel sx={{ marginBottom: 1 }} component="legend">
                      {input.label}
                    </FormLabel>
                    <RadioGroup
                      id={input.id}
                      aria-label={input.label}
                      name={input.id}
                      onChange={handleChange}
                      value={state[input.id] || ''}
                    >
                      {input.options.map((option) => (
                        <FormControlLabel
                          key={option._key}
                          value={option.value}
                          control={<Radio inputProps={{ 'aria-label': option.label }} />}
                          label={option.label}
                        />
                      ))}
                    </RadioGroup>
                    <FormHelperText error={!!errorMsgs[input.id]}>
                      {errorMsgs[input.id] ? errorMsgs[input.id] : input.helperText}
                    </FormHelperText>
                  </FormControl>
                );
              case 'select':
                return (
                  <FormControl
                    fullWidth
                    key={_key}
                    error={!!errorMsgs[input.id]}
                    sx={{ marginBottom: 4 }}
                  >
                    <FormLabel sx={{ marginBottom: 1 }} htmlFor={input.id}>
                      {input.label}
                    </FormLabel>
                    <Select
                      native
                      error={!!errorMsgs[input.id]}
                      required={input.required}
                      value={state[input.id] || ''}
                      inputProps={{ name: input.id, id: input.id }}
                      onChange={handleChange}
                      variant={variant}
                      onBlur={(e) => selectValidation(e.currentTarget)}
                    >
                      <option aria-label="None" value="" disabled={input.required}>
                        Select
                      </option>
                      {input.options.map((option) => (
                        <option value={option.value} key={option._key}>
                          {option.label}
                        </option>
                      ))}
                    </Select>
                    <FormHelperText error={!!errorMsgs[input.id]}>
                      {errorMsgs[input.id] ? errorMsgs[input.id] : input.helperText}
                    </FormHelperText>
                  </FormControl>
                );
              case 'textarea':
                return (
                  <FormControl
                    fullWidth
                    key={_key}
                    error={!!errorMsgs[input.id]}
                    sx={{ marginBottom: 4 }}
                  >
                    <FormLabel sx={{ marginBottom: 1 }} htmlFor={input.id}>
                      {input.label}
                    </FormLabel>
                    <TextField
                      id={input.id}
                      aria-describedby={`${input.id}-helper-text`}
                      error={!!errorMsgs[input.id]}
                      onChange={handleChange}
                      name={input.id}
                      required={input.required}
                      variant={variant}
                      multiline
                      minRows={input.rows}
                      placeholder={input.placeholderText}
                      onBlur={(e) => fieldValidation(e.currentTarget)}
                    />
                    <FormHelperText error={!!errorMsgs[input.id]} id={`${input.id}-helper-text`}>
                      {errorMsgs[input.id] ? errorMsgs[input.id] : input.helperText}
                    </FormHelperText>
                  </FormControl>
                );
              case 'textInput':
                return (
                  <FormControl
                    fullWidth
                    key={_key}
                    error={!!errorMsgs[input.id]}
                    sx={{ marginBottom: 4 }}
                  >
                    <FormLabel sx={{ marginBottom: 1 }} htmlFor={input.id}>
                      {input.label}
                    </FormLabel>
                    <TextField
                      error={!!errorMsgs[input.id]}
                      id={input.id}
                      aria-describedby={`${input.id}-helper-text`}
                      onChange={handleChange}
                      name={input.id}
                      required={input.required}
                      variant={variant}
                      type={input.inputType}
                      placeholder={input.placeholderText}
                      fullWidth
                      onBlur={(e) => fieldValidation(e.currentTarget)}
                    />
                    <FormHelperText error={!!errorMsgs[input.id]} id={`${input.id}-helper-text`}>
                      {errorMsgs[input.id] ? errorMsgs[input.id] : input.helperText}
                    </FormHelperText>
                  </FormControl>
                );
              default:
                return <div key="form-default">Form Field not Created</div>;
            }
          })}
          <Box sx={{ textAlign: btnAlignment }}>
            <ButtonSubmit
              type="submit"
              text={submitBtn.text}
              align={btnAlignment}
              {...mapMuiBtnSubmitToProps(btnStyle)}
            />
          </Box>
        </form>
      </Box>
    </ThemeProvider>
  );
}

export default FormNetlify;
