import React, { useRef } from 'react'

interface InputProps {
    onAdd(title: string): void
}

export const InputTask: React.FC<InputProps> = props => {
    const ref = useRef<HTMLInputElement>(null)
    const KeyPressE = (event: React.KeyboardEvent) => {
        if (event.key === 'Enter') {
            props.onAdd(ref.current!.value)
            ref.current!.value = ''
        }
    }
    return (
        <div className='InputField mt2'>
            <input ref = {ref} type='text' id='TaskInp' placeholder='Enter task name' onKeyPress={KeyPressE}/>
            <label htmlFor='TaskInp' className='active'>Enter task name</label>
        </div>
    )
}