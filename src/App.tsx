import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Form, useForm } from 'react-hook-form';
import { useState } from 'react';

// {
//   "created_at": "2025-01-15T12:33:53.707Z",
//   "comment": "string",
//   "postings": [
//     {
//       "account_id": 0,
//       "debit": true,
//       "amount": 0
//     }
//   ]
// }

interface Posting {
  date: String | Date,
  comment: string,
  postings: PostingEntry[]
}

interface PostingEntry {
  account_id: number,
  debit: boolean,
  amount: number
}

function App() {
  const { register, handleSubmit } = useForm({
    defaultValues: {
      date: new Date(),
      comment: "",
    }
  })

  const onSubmit = async (data: Posting) => {
    console.log(data)
  }

  return (
    <div className="">
      <h1>New split record</h1>

      <form onSubmit={handleSubmit(onSubmit)} >
        <input type='date' name='date' />

        |<div className=''>
          debit
        </div>
        <div className=''>
          credit
        </div>

        <textarea name='comment' rows={4} cols={50}></textarea>
        <input type="submit" value='Sunmit' />
      </form>

    </div>
  );
}

export default App;
