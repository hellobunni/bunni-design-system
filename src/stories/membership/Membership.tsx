import clsx from 'clsx';
import Link from 'next/link';
import React, { useState } from 'react';

type PlanCardProps = {
  title: string;
  price: string;
  save: string;
  description: string;
  type: "dark" | "light";
};

export const Membership = () => {
  const [isYearly, setIsYearly] = useState(false);

  const Toggle = () => (
    <div className="flex items-center justify-center my-10 gap-3">
      <span
        id="billing-label-monthly"
        className={clsx(
          "text-base font-medium transition-colors",
          !isYearly ? "text-black" : "text-gray-400"
        )}
      >
        Billed monthly
      </span>
      <button
        onClick={() => setIsYearly(!isYearly)}
        className={clsx(
          "relative inline-flex h-6 w-12 items-center rounded-full bg-gray-200 transition-colors",
          "focus:outline-none focus-visible:ring-2 focus-visible:ring-black"
        )}
        role="switch"
        aria-checked={isYearly}
        aria-labelledby="billing-label-monthly billing-label-yearly"
        tabIndex={0}
      >
        <span className="sr-only">
          Toggle between monthly and yearly billing
        </span>
        <span
          className={clsx(
            "inline-block h-5 w-5 rounded-full border-black shadow transition-transform duration-500 ease-in-out",
            isYearly ? "translate-x-6 bg-black" : "translate-x-1 bg-white"
          )}
        />
      </button>
      <span
        id="billing-label-yearly"
        className={clsx(
          "text-base font-medium transition-colors",
          isYearly ? "text-black" : "text-gray-400"
        )}
      >
        Billed yearly
      </span>
      <span
        className={clsx(
          "ml-2 text-xs font-semibold px-3 py-1 rounded-full",
          isYearly ? "bg-black text-white" : "bg-gray-100 text-gray-500"
        )}
        aria-live="polite"
      >
        20% SAVE
      </span>
    </div>
  );

  const PlanCard = ({
    title,
    price,
    save,
    description,
    type,
  }: PlanCardProps) => (
    <section
      className={clsx(
        "col-span-1 py-12 px-12 flex flex-col items-center justify-center gap-2 text-center",
        type === "dark" ? "bg-black text-white" : "bg-white text-black"
      )}
      aria-label={title}
    >
      <h2 className="text-lg font-bold">{title}</h2>
      <p className="text-4xl my-4 font-normal" aria-live="polite">
        {price}
      </p>
      <p className="text-sm text-gray-400 mb-4">
        {save ? `Switch to annual plan to save ${save}` : ""}
      </p>
      <p className="text-sm font-light">{description}</p>
      <button
        className={clsx(
          "text-sm w-full py-4 rounded-full my-8",
          type === "dark" ? "bg-white text-black" : "bg-black text-white"
        )}
        aria-label={`Get started with the ${title}`}
      >
        Get started
      </button>
      <Link
        href="/"
        className="text-sm underline"
        aria-label={`Learn more about the ${title}`}
      >
        Learn more about {title}
      </Link>
    </section>
  );

  return (
    <div className="mx-auto w-full">
      <div className="flex flex-col items-center justify-center max-w-2xl mx-auto">
        <h1 className="text-8xl text-center font-light">Premium Membership</h1>
        <Toggle />
      </div>
      <div className="grid grid-cols-2 w-full rounded-lg overflow-hidden mt-6 shadow-sm text-center">

      <PlanCard
          type="light"
          title="Start plan"
          price="Free"
          save="Perfect for getting started"
          description="Access basic features and try things out at your own pace."
        />
        <PlanCard
          type="dark"
          title="Professional plan"
          price={isYearly ? '$199' : '$24.99'}
          save="15%"
          description="During this phase the design is developed to meet the required technical standard to be used in production."
        />
      </div>
    </div>
  );
};

