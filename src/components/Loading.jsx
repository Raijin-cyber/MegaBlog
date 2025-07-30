const Loading = () => {
  return (
    <div className='flex items-center justify-center mt-30'>
      <div className={`h-10 w-10 bg-[#191919] flex justify-center items-center rounded-full`}>
        <div className='h-15 w-15 text-[#f5f5f5] text-lg font-extrabold animate-spin duration-75'>-</div>
      </div>
    </div>
  );
}

export default Loading
