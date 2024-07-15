import React from "react";

function Card({username = "Cheems"}){
    console.log(username);
    return (
        <>
        <figure className="md:flex bg-slate-100 rounded-xl p-8 md:p-0 dark:bg-slate-800">
  <img className="w-24 h-24 md:w-48 md:h-auto md:rounded-none rounded-full mx-auto" src="https://hips.hearstapps.com/hmg-prod/images/robert-pattinson-as-bruce-wayne-batman-in-the-batman-1645187114.jpg?crop=0.472xw:1.00xh;0.463xw,0&resize=1200:*" alt="" width="384" height="512" />
  <div className="pt-6 md:p-8 text-center md:te space-y-4">
    <blockquote>
      <p className="text-lg font-medium">
        "I've strived to keep Gotham protected from crimes but the city has started to eat itself, but I will keep doing what I am supposed to do..."
      </p>
    </blockquote>
    <figcaption className="font-medium">
      <div className="text-sky-500 dark:text-red-500">
        I'm vengeance
      </div>
      <div className="text-slate-700 dark:text-slate-500">
        Gotham's public protector
      </div>
    </figcaption>
  </div>
</figure>
        </>
    )
}
export default Card