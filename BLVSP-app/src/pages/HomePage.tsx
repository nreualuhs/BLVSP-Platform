function App() {

  return (
    <>
	<div className="mx-28">
      <h1 className="Title text-7xl mt-10">Access Code Hub</h1>
	  <p className="text-xl mt-12">Welcome to the Access Code Hub! We are a screen reader accessible platform where Blind and Low Vision Software Professionals (BLVSPs) can find software tools for accessibility, network with other BLVSPs and get involved in   community outreach through volunteering. To learn more about us  please see the features below.</p>
	  <div className="directory grid grid-cols-4 gap-8 mt-12">
		<div className="">
			<h2 className="rounded-sm bg-purple-500 px-2 py-4 text-center text-white mb-2">Tool Index</h2>
			<p className="rounded-sm bg-purple-200 px-2 py-4 text-center h-full">Our Tool Index page is a configured list of accessible tools. Please visit here to find the most applicable tools for your use case.</p>
		</div>
		<div className="">
			<h2 className="rounded-sm bg-purple-500 px-2 py-4 text-center text-white mb-2">Submit A Tool</h2>
			<p className="rounded-sm bg-purple-200 px-2 py-4 text-center h-full">To submit a tool to the website please use our Tool Submission Form. This will create a new index in the Tool Index page, so that other developers can take advantage of this utility.</p>
		</div>
		<div className="">
			<h2 className="rounded-sm bg-purple-500 px-2 py-4 text-center text-white mb-2">Connect Now</h2>
			<p className="rounded-sm bg-purple-200 px-2 py-4 text-center h-full">To learn more about the BLVSP community please visit our Community section. Here you can find other software professionals to discuss useful tools.</p>
		</div>
		<div className="">
			<h2 className="rounded-sm bg-purple-500 px-2 py-4 text-center text-white mb-2">Get Involved</h2>
			<p className="rounded-sm bg-purple-200 px-2 py-4 text-center h-full">To get more engaged in the community please consider volunteering. Here you can help improve our Tool Index website through content moderation or community outreach.</p>
		</div>
	  </div>
	</div>
    </>
  )
}

export default App