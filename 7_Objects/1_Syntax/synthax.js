// BEGIN Tutor
export default () => ({
    common: {
      files: ['src/objects.js'],
    },
    config: {
      outdir: '/dist',
    },
  });
  // END

  // @ts-check

// BEGIN (write your solution here)
const getJsonFileData = () => {
    const jsonFile = {
      common: {
        files: ['src/objects.js'],
      },
      config: {
        outdir: '/dist',
      },
    };
    return jsonFile;
  };
  
  export default getJsonFileData;
  // END
  