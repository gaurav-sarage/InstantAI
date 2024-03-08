import Header from '@/components/global/Header';
import TransformationForm from '@/components/global/TransformationForm';
import { transformationTypes } from '@/constants';
import { getUserById } from '@/lib/actions/user.action';
import { SearchParamProps, TransformationTypeKey } from '@/types';
import { auth } from '@clerk/nextjs';
import { redirect } from 'next/navigation';
import React from 'react';

const AddTransformationTypePage = async ({ params: { type } }: SearchParamProps) => {

  const { userId } = auth();
  const transformation = transformationTypes[type];

  if(!userId) redirect("/login");

  const user = await getUserById(userId);

  return (
    <>
      <Header
        title={transformation.title}
        subtitle={transformation.subTitle}
      />

      <section className='mt-10'>
        <TransformationForm
          action="Add"
          userId={user._id}
          type={transformation.type as TransformationTypeKey}
          creditBalance={user.creditBalance}
        />
      </section>
    </>
  )
}

export default AddTransformationTypePage
