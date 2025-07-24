export default function Home() {
  console.log(process.env.NEXT_PUBLIC_API_BASE_URL);
  return (
    <>
      <h1 className="text-7xl font-extrabold text-red-500 animate-bounce text-center my-5">Hello World</h1>
    </>
  );
}
