import React,{useState} from 'react'
const q = [
  {q:'Is it handmade?', a:'Yes, each piece is handcrafted.'},
  {q:'Do you ship worldwide?', a:'Yes — shipping rates vary by country.'}
]
function FAQ(){
  const [open, setOpen] = useState(null)
  return (
    <section className="py-12">
      <div className="max-w-3xl mx-auto px-4">
        <h3 className="text-2xl font-bold mb-4">FAQ</h3>
        <div className="space-y-3">
          {q.map((item,i)=>(
            <div key={i} className="bg-white p-4 rounded-xl shadow">
              <button onClick={()=> setOpen(open===i? null: i)} className="w-full text-left flex justify-between">
                <span className="font-semibold">{item.q}</span>
                <span>{open===i? '−': '+'}</span>
              </button>
              {open===i && <p className="mt-2 text-gray-600">{item.a}</p>}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
export default FAQ