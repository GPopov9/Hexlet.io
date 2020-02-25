// BEGIN (write your solution here)
const compareVersion = (ver1, ver2) => {
    const version1 = ver1.split('.');
    const version2 = ver2.split('.');
  
   for (let i = 0; i < version1.length; i += 1) {
     if (Number(version1[i]) > Number(version2[i])) return 1;
     if (Number(version1[i]) < Number(version2[i])) return -1;
   } 
   return 0;
  };
  
  export default compareVersion;
  // END
  
  // BEGIN
  const compareVersion = (first, second) => {
    const [a1, b1] = first.split('.');
    const [a2, b2] = second.split('.');
  
    const major = Math.sign(a1 - a2);
    const minor = Math.sign(b1 - b2);
  
    return major === 0 ? minor : major;
  };
  
  export default compareVersion;
  // END