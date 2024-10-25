const user = {
    profile: {
      name: "Nam"
    }
  };
  
  const userName = user.profile?.name ?? "Không có tên";
  console.log(userName); // Kết quả: "Nam"
  
  const userAge = user.profile?.name ?? "Không có tuổi";
  console.log(userAge); // Kết quả: "Không có tuổi" (vì age là undefined)
  