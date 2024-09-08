import React, { useState } from 'react'
import ForgotPasswordModal from '../features/ForgotPasswordModal'
import VerifyPasswordModal from '../features/VerifyPasswordModal'
import ResetPassword from '../features/ResetPassword'
import SuccessModal from '../features/SuccessModal'

interface ResetProps {
    handleResetPassoword: (value: boolean) => void;
}

export default function ResetingPassword({ handleResetPassoword }: ResetProps) {
    const [stage, setStage]=useState('reset');

    const handleStage=(value:string)=>{
        setStage(value)
    }

    return (
        <div
            className='bg-black fixed w-[100vw] h-[100vh] bg-opacity-55 z-[1000] flex justify-center items-center'
            onClick={(e) => { e.stopPropagation(); handleResetPassoword(false) }}
        >
            {stage==='forgot-password'?<ForgotPasswordModal handleResetPassoword={handleResetPassoword} handleStage={handleStage}/>:null}
            {stage==='verify'?<VerifyPasswordModal handleResetPassoword={handleResetPassoword} handleStage={handleStage}/>:null}
            {stage==='reset'?<ResetPassword handleResetPassoword={handleResetPassoword} handleStage={handleStage}/>:null}
            {stage==='success'?<SuccessModal handleResetPassoword={handleResetPassoword} handleStage={handleStage}/>:null}
        </div>
    )
}

