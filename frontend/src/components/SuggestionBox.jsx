import React, { useState } from 'react'
import { motion } from 'framer-motion'
import HText from '../shared/HText'
import PrimaryText from '../shared/PrimaryText'



const Notification = ({ name }) => {
    return (
        <section className="h-[100vh] w-[100vw] bg-red-500  
                            flex flex-col justify-center items-center
        " >
            <div>
                <HText> 
                    Thank you for your contribution. 
                    Your Suggestion has been sent to our Admins.
                </HText>
            </div>
        </section>
    )
} 



const SuggestionBox = () => {
    const [category, setCategory] = useState('none')
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [anonymous, setAnonymous] = useState('off')
    const [name, setName] = useState('')
   

    const handleCategory = (e) => {
        setCategory(e.target.value)
    }
    const handleTitle = (e) => {
        setTitle(e.target.value)
    }
    const handleDescription = (e) => {
        setDescription(e.target.value)
    }
    const handleAnonymous = (e) => {
        setAnonymous(e.target.value)
    }
    const handleName = (e) => {
        anonymous === 'on' ? setName('') : setName(e.target.value)
    }

    const labelStyles = ` text-md font-[600] text-gray-600 w-fit  `
    const inputStyles = `w-full p-3 bg-white rounded-md font-[600]
                        outline-none 
                        text-gray-600 border 
                        focus:bg-blue-200// focus:bg-purple-200// focus:bg-slate-100
                        placeholder:text-gray-600//  placeholder:text-2 text-bold            
                        
                        `
    const submitStyles = `rounded-md 
                        bg-gradient-to-br from-purple-600 to-purple-900 
                        px-10 py-2 border border-transparent
                        hover:from-transparent hover:to-transparent hover:text-purple-700
                        hover:border-purple-700 
                        active:from-purple-900 active:to-purple-950 active:text-white
                        cursor-pointer font-bold w-full
                        text-center text-lg text-white 
                        transition-all `

    const optionStyles = `  bg-slate-100 
                            rounded-lg text-slate-700 text-white// text-lg font-[600]
                        `
    

    console.log(
        title,
        description,
        category,
        anonymous,
        name
    )
    const formData = {
        title: title,
        description: description,
        category: category,
        anonymous: anonymous,
        name: name
    }



    const handleSubmit = () => {
        console.log("submit")
    }

    return (
        <section className='  bg-slate-50 min-w-[720px]// sm:min-w-[720px]//
                             text-slate-800 w-full transition-all h-full 
                             py-11 pb-[20rem] px-3 text-center  '>
            <div className='flex flex-col justify-evenly items-start gap-6
                            h-full w-full overflow-hidden transition-all
                            place-self-center text-center
                            border// border-blue-500 
                            py-5 
             '>
                <div className=' text-center place-self-center border// border-black '>
                    <HText>Share Your Insight</HText>
                    <PrimaryText>Help us improve NIHUB. Your feedback is invaluable.</PrimaryText>
                </div>
                <form className='flex flex-col justify-evenly items-center  gap-4
                                h-fit place-self-center transition-all
                                bg-white  sm:w-[40rem] w-full 
                                rounded-lg py-11 px-5 
                                shadow-lg border// border-blue-500
                '>
                    <div className='flex flex-col justify-evenly items-start gap-2 
                                    w-full  '>
                        <label className={labelStyles} >Suggestion</label>
                        <input type='text' placeholder='eg. Add dark mode' id='title' 
                                className={inputStyles}  onChange={handleTitle}
                        />
                    </div>
                    <div className='flex flex-col justify-evenly items-start gap-2 w-full   '>
                        <label className={labelStyles} >Description</label>
                        <textarea placeholder='Describe your suggestion in detail...' 
                                id='description' onChange={handleDescription}
                                className={inputStyles} 
                        />
                    </div>
                    <div className='flex flex-col justify-evenly items-start gap-2 w-full   '>
                        <label className={labelStyles} >Category</label>
                        <select className={`${inputStyles}`} onChange={handleCategory} 
                                value={category} id='select-category' >
                            <option className={optionStyles} id='none' value='none' >
                                Select a Category --
                            </option>
                            <option className={optionStyles} id='enhancement' value='enhancement' >
                                Enhancement
                            </option>
                            <option className={optionStyles} id='bug-fix' value='bugfix' >
                                Bug Fix
                            </option>
                            <option className={optionStyles} id='ui-improvement' value='uiimprovement' >
                                UI Improvement
                            </option>
                            <option className={optionStyles} id='performance' value='performance' >
                                Performance
                            </option>
                            <option className={optionStyles} id='feature-request' value='featurerequest' >
                                Feature Request
                            </option>
                            <option className={optionStyles} id='accessibility' value='accessibility' >
                                Accessibility
                            </option>
                            <option className={optionStyles} id='other' value='other' >
                                Other
                            </option>
                        </select>
                    </div>
                    <div className='flex justify-between items-center gap-2 w-full   
                                    p-3 bg-white rounded-md font-[600] 
                                    outline-none text-gray-600 border
                    '>
                        <div className=' text-left ' >
                            <label className={labelStyles} >Submit Anonymously</label>
                            <div className='font-[400] text-xs
                                            text-gray-400 text-left
                            ' >
                                Your name will not be attatched to this suggestion.
                            </div>
                        </div>
                        <input type='radio' id='anonymous' value='off' toggle
                                onChange={handleAnonymous}
                        />
                    </div>
                    <div className='flex flex-col justify-evenly items-start gap-2 
                                    w-full  '>
                        <label className={labelStyles} >Full Name</label>
                        <input type='text' placeholder='John Doe' id='name' 
                                className={inputStyles}  onChange={handleName}
                        />
                    </div>
                    
                    <div className='flex flex-col justify-evenly items-start gap-2 w-full   '>
                        <input type='submit' className={submitStyles}
                                onClick={handleSubmit} value='Submit Suggestion'
                        />
                    </div>
                </form>
                {/* <Notification /> */}
            </div>
        </section>
    )
}

export default SuggestionBox;