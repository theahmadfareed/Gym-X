import React, { useState } from 'react';
import { Autocomplete, Paper, TextField } from '@mui/material';
import { useForm } from 'react-hook-form';
import './FormDetails.css';
import dayjs from 'dayjs';
import Stack from '@mui/material/Stack';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import { Box } from '@mui/system';
import { genderSlot } from '../../../../infoData.config';
import PaymentForm from './PaymentForm';
import useAuth from '../../../Hook_Context/useAuth';

const FormDetails = () => {
    const [ membership, setMembership] = useAuth();
    const [birthDate, setBirthDate] = useState({
        birthdayDate: dayjs()
    });
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = (data) => {
        data.membership = membership.membershipName;
        data.price = membership.price;
        data.birthdayDate = birthDate.birthdayDate;

        fetch('http://localhost:30000/addMembership', {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(data)
        })
        .then(res => res.json())
        .then(result =>{
            console.log('applied/submitted');
            alert('submittd successfully!')
        })

    }

    const handleDate = (date) => {
        const newDate = { ...birthDate };
        newDate.birthdayDate = date;
        setBirthDate(newDate)
    }


    return (
        <div>
            <div className="container ">
                <Paper className='form-paper' elevation={3} >
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <h2 className='f-os text-center m-4 p-0 training-header'>MemberShip <span className='brand-c'>Form</span></h2>
                        <div className="row gx-2 position-relative">
                            <div className="col-md-5 offset-md-1">
                                <TextField
                                    className="form-field"
                                    label="First Name"
                                    variant="outlined"
                                    // size="small"
                                    {...register("firstName", { required: true })}
                                />
                                {errors.firstName && (
                                    <span className="error-msg d-block">
                                        <small>This field is required</small>
                                    </span>
                                )}

                                <TextField
                                    className="form-field"
                                    label="Email"
                                    variant="outlined"
                                    {...register("email", { required: true })}
                                />
                                {errors.email && (
                                    <span className="error-msg d-block">
                                        <small>This field is required</small>
                                    </span>
                                )}

                                <LocalizationProvider dateAdapter={AdapterDayjs}>
                                    <Stack spacing={3}>
                                        <DesktopDatePicker
                                            className="form-field"
                                            label="Date desktop"
                                            inputFormat="MM/DD/YYYY"
                                            value={birthDate.birthdayDate}
                                            onChange={handleDate}
                                            renderInput={(params) => <TextField {...params} />}
                                        />

                                    </Stack>
                                </LocalizationProvider>

                                <TextField
                                    className="form-field"
                                    label="Country/Region"
                                    variant="outlined"
                                    {...register("country", { required: true })}
                                />
                                {errors.counrty && (
                                    <span className="error-msg d-block">
                                        <small>This field is required</small>
                                    </span>
                                )}

                                <TextField
                                    className="form-field"
                                    label="Address"
                                    variant="outlined"
                                    {...register("address", { required: true })}
                                />
                                {errors.address && (
                                    <span className="error-msg d-block">
                                        <small>This field is required</small>
                                    </span>
                                )}
                            </div>

                            <div className="col-md-5">
                                <TextField
                                    className="form-field"
                                    label="Last Name"
                                    variant="outlined"
                                    {...register("lastName", { required: true })}
                                />
                                {errors.lastName && (
                                    <span className="error-msg d-block">
                                        <small>This field is required</small>
                                    </span>
                                )}
                                <TextField
                                    className="form-field"
                                    type="number"
                                    label="Phone Number"
                                    variant="outlined"
                                    {...register("phone", { required: true })}
                                />
                                {errors.phone && (
                                    <span className="error-msg d-block">
                                        <small>This field is required</small>
                                    </span>
                                )}

                                <Autocomplete
                                    style={{ margin: "0 auto" }}
                                    className="form-field"
                                    options={genderSlot}
                                    autoHighlight
                                    getOptionLabel={(option) => option.gender}
                                    renderOption={(props, option) => (
                                        <Box
                                            component="li"
                                            sx={{ "& > img": { mr: 2, flexShrink: 0 } }}
                                            {...props}
                                        >
                                            {option.gender}
                                        </Box>
                                    )}
                                    renderInput={(params) => (
                                        <TextField
                                            {...params}
                                            label="Gender"
                                            inputProps={{
                                                ...params.inputProps,
                                                autoComplete: "new-password", // disable autocomplete and autofill
                                            }}
                                            {...register("gender", { required: true })}
                                        />

                                    )}
                                />
                                <TextField
                                    className="form-field"
                                    label="City"
                                    variant="outlined"
                                    {...register("city", { required: true })}
                                />
                                {errors.city && (
                                    <span className="error-msg d-block">
                                        <small>This field is required</small>
                                    </span>
                                )}

                                <TextField
                                    className="form-field"
                                    label="Post Code"
                                    type='number'
                                    variant="outlined"
                                    {...register("postCode", { required: true })}
                                />
                                {errors.postCode && (
                                    <span className="error-msg d-block">
                                        <small>This field is required</small>
                                    </span>
                                )}
                                <input type="submit" className="brand-btn form-btn" />
                            </div>
                        </div>

                    </form>
                </Paper>
                <div className="row ">
                    <div className="col-md-7 m-auto">
                        <Paper className='form-paper' elevation={3}>
                            <PaymentForm></PaymentForm>
                        </Paper>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FormDetails;