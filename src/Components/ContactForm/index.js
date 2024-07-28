'use client';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import * as z from 'zod';
import { ThreeDotsMiddle } from 'react-svg-spinners'; 'react-svg-spinners';
import { useEffect, useState } from 'react';
import * as Toast from '@radix-ui/react-toast';

import { Container, InputContainer, SubmitButton, ToastRoot, ToastViewport } from './styles';
import { ResetIcon } from '@radix-ui/react-icons';

const contactSchema = z.object({
  name: z.string(),
  email: z.string().email(),
  comments: z.string()
})

function ContactForm() {
  const [openToast, setOpenToast] = useState(false);

  const {
    handleSubmit,
    register,
    reset,
    formState: { errors, isSubmitting, isSubmitSuccessful, isDirty, isValid },
  } = useForm({
    resolver: zodResolver(contactSchema)
  });

  async function onSubmit(data) {    
    await new Promise((resolve) => {
      setTimeout(() => {
        resolve();
      }, 2000); // 2 seconds in milliseconds
    });
    setOpenToast(true)
  }

  useEffect(() => {
    if (isSubmitSuccessful) {
      reset()
    }
  }, [isSubmitSuccessful, reset])

  return (
    <Container>
      <form onSubmit={handleSubmit(onSubmit)}>
        {/* Name Input */}
        <InputContainer>
          <input
            {...register('name', { required: true })}
            id='name'
            name='name'
            type='text'
            placeholder='Nome completo'
            autoComplete='off'
          />
          {errors?.name && <p>{errors?.name?.message}</p>}
        </InputContainer>

        {/* Email Input */}
        <InputContainer>
          <input
            {...register('email', { required: true })}
            id='email'
            name='email'
            type='text'
            placeholder='E-mail para contato'
            autoComplete='off'
          />
          {errors?.email && <p>{errors?.email?.message}</p>}
        </InputContainer>

        {/* Email Input */}
        <InputContainer>
          <input
            {...register('comments', { required: true })}
            id='comments'
            name='comments'
            type='text'
            placeholder='Observações'
            autoComplete='off'
          />
          {errors?.comments && <p>{errors?.comments?.message}</p>}
        </InputContainer>

        {/* Submit Button */}
        <SubmitButton
          type='submit'
          disabled={!isDirty || !isValid || isSubmitting}
        >
          {isSubmitting ? <ThreeDotsMiddle /> : 'Sign In'}
        </SubmitButton>
      </form>

      <Toast.Provider swipeDirection='up'>
        <ToastViewport />
        <ToastRoot open={openToast} onOpenChange={setOpenToast}>
          <Toast.Title>Contato enviado com Sucesso</Toast.Title>
        </ToastRoot>
      </Toast.Provider>
    </Container>
  );
}

export default ContactForm;
