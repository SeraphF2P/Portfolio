import type { NextPage } from "next"

const Page: NextPage = () => {
  return (
    <main className="relative  h-full  w-full  ">
      <section className=" absolute inset-0 overflow-hidden">
        <div className="bg-primary/60 absolute left-0 top-32 flex h-96  w-full   max-w-sm items-center justify-center rounded-sm sm:relative  sm:z-40 sm:mx-auto  sm:bg-transparent  ">
          <div className="font-outfit   relative left-16 flex flex-col  p-4  sm:left-0   ">
            <h2 className=" capitalize">web developer </h2>
            <p className=" pl-1">ready for work</p>
          </div>
        </div>

        <span className="   absolute -bottom-24 -right-24  aspect-square w-full max-w-sm rounded-full  border-[20px] border-yellow-300/90 " />
      </section>
    </main>
  )
}

export default Page
