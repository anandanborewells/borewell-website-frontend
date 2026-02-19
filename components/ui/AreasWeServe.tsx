export function AreasWeServe() {
  const branchs = [
    "Alwarpet (chennai)",
    "Tambaram (Chengalpattu)",
    "Padappai (kancheepuram)",
  ];
  const location = ["Chennai", " Chengalpattu", "kancheepuram"];

  return (
    <section className="py-20 bg-white">
          
           <div className="container mx-auto px-4 text-center">
        <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">
         Areas We Serve
        </h2>
        <p className="text-slate-500 mb-10 max-w-2xl mx-auto text-sm">
          We provide borewell drilling services across Chennai and surrounding
          areas
        </p>

        <div className="flex flex-wrap justify-center gap-4">
          {location.map((area) => (
            <div
              key={area}
              className="px-8 py-2.5 rounded-2xl border border-black text-slate-700 font-medium text-sm  bg-white shadow-sm"
            >
              {area}
            </div>
          ))}
        </div>
      </div>
       <div className="container mx-auto px-4 mt-10 text-center">
        <h2 className="text-xl md:text-2xl  font-bold text-slate-900 mb-4">
          Branches
        </h2>
        <div className="flex flex-wrap justify-center gap-4">
          {branchs.map((area) => (
            <div
              key={area}
              className="px-8 py-2.5 rounded-2xl border border-black text-slate-700 font-medium text-sm  bg-white shadow-sm"
            >
              {area}
            </div>
          ))}
        </div>
      </div>



     

     
    </section>
  );
}
