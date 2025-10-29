import React from 'react'

const cats = [
  {title:'Necklaces', image:'/images/c1.jpg'},
  {title:'Earrings', image:'/images/c2.jpg'},
  {title:'Bracelets', image:'/images/c3.jpg'},
  {title:'Rings', image:'/images/c4.jpg'}
]

function Categories(){
  return (
    <section className="py-12 bg-brand-50">
      <div className="max-w-6xl mx-auto px-4">
        <h3 className="text-2xl font-bold mb-6">Categories</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {cats.map((c,idx)=>(
            <div key={idx} className="relative rounded-xl overflow-hidden">
              <img src={c.image} alt={c.title} className="w-full h-40 object-cover"/>
              <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
                <h4 className="text-white font-semibold">{c.title}</h4>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Categories