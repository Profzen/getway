import React from 'react';

type Props = {
  name: string;
  role?: string;
  img?: string;
};

export default function ProfileCard({ name, role, img }: Props) {
  return (
    <div className="bg-surface-container-lowest rounded-xl p-md text-center">
      <div className="w-24 h-24 rounded-full overflow-hidden mx-auto mb-sm border-2 border-primary">
        {img ? <img src={img} alt={name} className="w-full h-full object-cover" /> : <div className="w-full h-full bg-surface" />}
      </div>
      <h3 className="font-headline-md">{name}</h3>
      {role && <p className="text-on-surface-variant">{role}</p>}
    </div>
  );
}
