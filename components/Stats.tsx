const stats = [
  { value: "5+", label: "Years of Experience", gradient: "from-blue-400 to-cyan-400" },
  { value: "100+", label: "Projects Completed", gradient: "from-purple-400 to-pink-400" },
  { value: "50+", label: "Happy Clients", gradient: "from-cyan-400 to-blue-400" },
  { value: "99%", label: "Client Satisfaction", gradient: "from-pink-400 to-rose-400" },
];

export default function Stats() {
  return (
    <section className="py-16 relative overflow-hidden">
      <div className="container-custom">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="glass-card text-center group hover:scale-110 transition-all duration-500"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative inline-block mb-2">
                <div className={`absolute inset-0 bg-gradient-to-r ${stat.gradient} blur-xl opacity-30 group-hover:opacity-50 transition-opacity`} />
                <div className="relative text-4xl md:text-5xl font-bold gradient-text">
                  {stat.value}
                </div>
              </div>
              <div className="text-sm md:text-base text-slate-600 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
