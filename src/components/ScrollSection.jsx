export default function ScrollSection() {
  return (
    <section>
      <div className="h-[150vh] bg-blue-100 p-8">
        <article className="h-[100vh] bg-white sticky top-8 z-0 rounded-3xl p-3">
          <p>This is where the content will be</p>
        </article>
      </div>
      <div className="h-96 bg-white">
        <article>
          <h1>Additional content will go here</h1>
        </article>
      </div>
    </section>
  );
}