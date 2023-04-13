import { useState, useEffect } from "react"; 

const useUsers = () => {
  const [loading, setLoading] = useState(false);
  const [userEmail, setUserEmail] = useState(null);
  const [users, setUsers] = useState([]);
  const [currentPage, setCurrentPage] = useState("");

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await fetch(`https://reqres.in/api/users?page=${currentPage}`);
        const userData = await response.json();

        setLoading(true);
        setUsers(userData.data);
        setCurrentPage(userData.page);
      } catch (error) {
        console.error("Error fetching users: ", error);
      } finally {
        setTimeout(() => {
          setLoading(false);
        }, 2000)
      }
    };

    fetchUserData();
  }, [currentPage, userEmail]);

  useEffect(() => {
    setUserEmail(localStorage.getItem("email"));
  }, [userEmail]);


  const handlePagination = (value) => {
    setCurrentPage(currentPage + value)
  };

  return { users, userEmail, handlePagination, currentPage, loading };
}

export { useUsers };