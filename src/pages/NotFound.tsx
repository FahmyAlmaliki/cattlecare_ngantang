import { useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/contexts/AppContext";

const NotFound = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { isAuthenticated } = useAuth();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  const handleGoHome = () => {
    if (isAuthenticated) {
      navigate("/");
    } else {
      navigate("/login");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">404</h1>
        <p className="text-xl text-muted-foreground mb-6">
          Oops! Halaman yang Anda cari tidak ditemukan
        </p>
        <Button onClick={handleGoHome}>
          {isAuthenticated ? "Kembali ke Dashboard" : "Kembali ke Login"}
        </Button>
      </div>
    </div>
  );
};

export default NotFound;
