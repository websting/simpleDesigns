import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

function DownloadPage() {
  const [templateName, setTemplateName] = useState('');
  const [isValid, setIsValid] = useState(false);
  const [sessionId, setSessionId] = useState(''); // ✅ store sessionId in state
  const navigate = useNavigate();

  useEffect(() => {
    const query = new URLSearchParams(window.location.search);
    const id = query.get('session_id'); // ✅ read from URL
    if (!id) return;
    setSessionId(id);

    const fetchSession = async () => {
      try {
        const res = await fetch(`https://simpledesigns.onrender.com/checkout-session/${id}`);
        const data = await res.json();

        if (data?.template) {
          setTemplateName(data.template);
          setIsValid(true);
        } else {
          console.error('Invalid session data:', data);
        }
      } catch (err) {
        console.error('Error fetching session:', err);
      }
    };

    fetchSession();
  }, []);

  const handleDownload = () => {
    setTimeout(() => {
      navigate('/thank-you');
    }, 5000); // Redirect after 5 seconds
  };

  return (
    <div className="p-4 text-center">
      {isValid ? (
        <>
          <h2 className="text-2xl font-bold mb-2">✅ Payment Successful</h2>
          <p>You purchased: <strong>{templateName}</strong></p>
          <a
            href={`https://simpledesigns.onrender.com/secure-download/${sessionId}`} // ✅ now defined
            onClick={handleDownload}
            className="mt-4 inline-block bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition"
          >
            Download Template
          </a>
        </>
      ) : (
        <p>Verifying your purchase...</p>
      )}
    </div>
  );
}

export default DownloadPage;








