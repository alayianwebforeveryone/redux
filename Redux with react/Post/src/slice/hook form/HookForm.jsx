import React from 'react'
import { useForm } from 'react-hook-form'
import Input from '../../Components/Input'

function HookForm() {
    const { register, handelSubmit } = useForm()
    return (
        <div><form action="">
            <Input
                label="Email"
                type='email'
                placeholder="enter your email"
                {...register("email", { required: true,  validate: {
                    matchPatern: (value)=> /^((?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[\W]).{8,64})/g.
                    test(value)|| "enter valid email"
                }})}
               
       
        />
            <Input
                label="Password"
                type='password'
                placeholder="enter your password"
                {...register("pass", { required: true,  validate: {
                    matchPatern: (value)=> /^((?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[\W]).{8,64})/.
                    test(value)|| "Password must be strong",
                }})}
               
       
        />

        <button type='submit'>
            Create Account
        </button>


                </form>
            </div>
            )
}

            export default HookForm
