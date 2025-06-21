/* eslint-disable tailwindcss/no-custom-classname */
/* eslint-disable tailwindcss/migration-from-tailwind-2 */
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'

export default function ApplyModal({ isOpen, onClose }) {
  const [submitted, setSubmitted] = useState(false)
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm()

  const onSubmit = (data) => {
    fetch('https://api.mygccc.org/v1/data-logs', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ name: 'GRTM SA-2025', data })
    })
      .then((res) => res.json())
      .then(() => {
        setSubmitted(true)
        reset()
      })
      .catch((err) => {
        console.error('Error submitting application:', err)
        alert(
          'There was an error submitting your application. Please try again.'
        )
      })
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm">
      <div
        className="relative h-screen w-full max-w-lg bg-white p-6 shadow-lg md:h-auto md:rounded-xl"
        style={{ overflowY: 'auto' }}
      >
        <div>
          <button
            onClick={onClose}
            className="absolute right-4 top-2 text-xl text-black"
          >
            ×
          </button>

          {!submitted ? (
            <>
              <h3 className="font-heading mb-4 text-xl">
                Apply for Summer Academy 2025
              </h3>
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                {[
                  { name: 'firstName', label: 'First Name', type: 'text' },
                  { name: 'lastName', label: 'Surname', type: 'text' },
                  { name: 'age', label: 'Age', type: 'number' },
                  {
                    name: 'gender',
                    label: 'Gender',
                    type: 'select',
                    options: ['', 'Male', 'Female']
                  },
                  { name: 'email', label: 'Email', type: 'email' },
                  { name: 'phone', label: 'Phone Number', type: 'tel' },
                  { name: 'address', label: 'Address', type: 'text' },
                  {
                    name: 'smartDevice',
                    label: 'Do you have a smartphone/laptop?',
                    type: 'select',
                    options: ['', 'Yes', 'No']
                  }
                ].map(({ name, label, type, options }) => (
                  <div key={name}>
                    <label className="font-body mb-1 block text-sm">
                      {label}
                    </label>
                    {type === 'select' ? (
                      <select
                        {...register(name, { required: true })}
                        className="w-full rounded border px-4 py-2"
                        required={true}
                      >
                        {options.map((option) => (
                          <option
                            disabled={option ? false : true}
                            selected={option ? false : true}
                            key={option}
                            value={option}
                          >
                            {option || 'Select an option'}
                          </option>
                        ))}
                      </select>
                    ) : (
                      <input
                        type={type}
                        {...register(name, { required: true })}
                        className="w-full rounded border px-4 py-2"
                      />
                    )}
                    {errors[name] && (
                      <p className="text-xs text-red-500">
                        This field is required
                      </p>
                    )}
                  </div>
                ))}

                <button
                  type="submit"
                  className="w-full rounded bg-black py-2 text-white transition hover:bg-gray-800"
                >
                  Submit Application
                </button>
              </form>
            </>
          ) : (
            <div className="py-10 text-center">
              <h3 className="font-heading mb-4 text-2xl">Success!</h3>
              <p className="font-body mb-4 text-sm">
                Your application has been submitted successfully.
              </p>
              <button
                onClick={() => {
                  setSubmitted(false)
                  onClose()
                }}
                className="rounded bg-black px-6 py-2 text-white transition hover:bg-gray-800"
              >
                Close
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
