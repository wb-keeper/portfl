function Contact(props) {
  return (
    <section>
      <div className="container mx-auto">
        <div>
          <div className="flex flex-col justify-center">
            <div className="flex items-center gap-x-4 text-primary text-lg mb-4">
              <span className="w-[30px] h-[2px] bg-primary"></span>
              Say Hello
            </div>
            <h1 className="h1 max-w-md mb-8">Let's Work Together</h1>
            <p className="subtitle max-w-[400px]">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum
              facere fuga ipsam, iusto libero quae?
            </p>
          </div>
          <div className="hidden xl:flex w-full">illustration</div>
        </div>
        <div>info text & form</div>
      </div>
    </section>
  );
}

export default Contact;
