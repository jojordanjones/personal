'use client'
import { useState, useEffect } from 'react'

const questions = [
  'How did you feel?',
  'Big win?',
  'What did you learn?',
  'Challenges?',
  'Anything else?'
]

export default function Journal() {
  const [answers, setAnswers] = useState<string[]>(Array(5).fill(''))
  const handleChange = (idx: number, val: string) => {
    const copy = [...answers]
    copy[idx] = val
    setAnswers(copy)
  }
  const handleSubmit = async () => {
    await fetch('/api/journal', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ answers })
    })
    setAnswers(Array(5).fill(''))
    alert('Saved')
  }
  return (
    <div className="space-y-2">
      {questions.map((q, i) => (
        <div key={i}>
          <label className="block font-bold mb-1">{q}</label>
          <input
            className="border p-2 w-full"
            value={answers[i]}
            onChange={(e) => handleChange(i, e.target.value)}
          />
        </div>
      ))}
      <button onClick={handleSubmit} className="px-4 py-2 bg-blue-500 text-white">Save</button>
    </div>
  )
}
