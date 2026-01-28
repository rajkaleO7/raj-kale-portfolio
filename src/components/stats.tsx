export default function Stats() {
  return (
    <section className="grid grid-cols-4 gap-10 px-16 py-10 text-center">
      {[
        { num: '3+', label: 'Projects' },
        { num: '2+', label: 'Years Learning' },
        { num: '5+', label: 'Technologies' },
        { num: '100%', label: 'Dedication' },
      ].map((item) => (
        <div key={item.label}>
          <h2 className="text-3xl text-lime-400 font-bold">{item.num}</h2>
          <p className="text-gray-400">{item.label}</p>
        </div>
      ))}
    </section>
  );
}
