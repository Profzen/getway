import React from 'react';

type Props = {
  title: string;
  description?: string;
  price?: string;
  img?: string;
  cta?: string;
};

export default function CourseCard({ title, description, price, img, cta = 'Order' }: Props) {
  return (
    <div className="rounded-xl overflow-hidden border bg-white/5">
      {img && <img src={img} alt={title} className="w-full h-48 object-cover" />}
      <div className="p-md">
        <h3 className="font-headline-md">{title}</h3>
        {description && <p className="text-on-surface-variant mt-2">{description}</p>}
        <div className="mt-4 flex justify-between items-center">
          <div className="font-display-lg">{price}</div>
          <button className="px-3 py-2 bg-primary-container text-white rounded">{cta}</button>
        </div>
      </div>
    </div>
  );
}
