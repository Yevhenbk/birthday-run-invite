export default function BackgroundDecoration() {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      <div className="absolute top-10 left-10 w-32 h-32 bg-blue-100 rounded-full opacity-20 blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-40 h-40 bg-cyan-100 rounded-full opacity-20 blur-3xl"></div>
    </div>
  );
}