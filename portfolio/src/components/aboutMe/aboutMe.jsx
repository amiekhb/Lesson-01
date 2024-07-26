const aboutMe = () => {
  return (
    <div className=" bg-gray-50">
      <div className="p-20 place-content-center">
        <div className="flex justify-center">
          <p className="text-gray-600 bg-gray-200 rounded-xl text-center h-[28px] w-[105px]">
            About me
          </p>
        </div>
        <div className=" mt-12 flex justify-between gap-12">
          <div className=" w-2/4 ">
            <div className="w-[440px] h-[520px] container">
              <div className="bg-gray-200 w-[400px] h-[480px] z-0 absolute"></div>
              <img
                className="w-[400px] h-[480px] object-cover border-[15px] border-gray-50 absolute z-10 top-85 right-30"
                src="https://s3-alpha-sig.figma.com/img/a823/7c2d/a751e4a2db426ecfca4f62d9ba3dc8f4?Expires=1722816000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ScmRPtqSr3oqubAqMFwbeSujIqtc0BEB7HBtiF3q3PwzAz9cdfVMmpsoJDvcjMHnSNvajy~qXtB8wwXM-leo4lRSaNwBRfMoNuwGDj40wzPE9nvWkc-0EMddEgBiOLhzwjSD-PVkn7gzA2TisMzyrmWDt0FgWVSBXrHiFdkcFKpq2xBUruNbzJmgQVyotlE4IdWS1tN1mtZ04u~1u7YBhpDCStbEKgzvukJL9q~MNfpij~qgzu92SDEwoLNt58-KSlVmtNPgPZa8EUbryKrmxdCyevmKvR5XY~ToLvEK5vavKlZJ-vQLzgBXg3fEwo0e0AvcKPbCnvsK1DBGTl9QAQ__"
                alt=""
              />
            </div>
          </div>

          <div className="w-2/4">
            <tailbar className="text-gray-900 text-3xl">
              <p>Curious about me? Here you have it:</p>
            </tailbar>
            <text className="text-gray-600 flex flex-col gap-4">
              <p>
                I'm a designer turned full stack developer, passionate about
                React.js and Node.js. I excel in blending technical and visual
                aspects to craft exceptional digital products, prioritizing user
                experience, precise design, and optimized code.
              </p>
              <p>
                Since starting my web development journey in 2015, I've embraced
                challenges and kept up with the latest tech trends. Now in my
                early thirties, seven years in, I'm building cutting-edge web
                apps using Next.js, TypeScript, Nestjs, Tailwindcss, Supabase,
                and more.
              </p>
              <p>
                With a progressive mindset, I enjoy the entire product
                development process, from ideation to execution. Off duty,
                you'll find me on Twitter, tracking startup journeys, or
                unwinding. Follow me for tech insights and public project
                updates on Twitter or GitHub.
              </p>
              <p>Finally, some quick bits about me.</p>
              <div>
                <div>
                  <p>B.E. in Computer Engineering </p>
                  <p>Full time freelancer</p>
                </div>
                <div>Avid learner</div>
              </div>

              <p>
                One last thing, I'm available for freelance work, so feel free
                to reach out and say hello! I promise I don't bite 😉
              </p>
            </text>
          </div>
        </div>
      </div>
    </div>
  );
};
export default aboutMe;
