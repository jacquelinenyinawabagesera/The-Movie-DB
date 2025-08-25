export default function Footer() {
    return (
      <footer className="border-t border-yellow-700 text-gray-400 text-sm p-6 mt-12">
        <div className="max-w-7xl mx-auto flex justify-between flex-wrap gap-8">
          <div>
            <h3 className="font-bold text-white mb-3">Download Our App</h3>
            <div className="flex gap-4">
              <a href="#" className="bg-gray-800 px-4 py-2 rounded">App Store</a>
              <a href="#" className="bg-gray-800 px-4 py-2 rounded">Google Play</a>
            </div>
          </div>
  
          <div className="flex gap-12 flex-wrap">
            <div>
              <h3 className="font-semibold mb-2">Navigation</h3>
              <ul>
                <li>Home</li>
                <li>My list</li>
                <li>About Us</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Legal</h3>
              <ul>
                <li>General Info</li>
                <li>Privacy Policy</li>
                <li>Terms of Service</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Contact Us</h3>
              <p>support@egymovies.com</p>
              <p>+201045963322</p>
              <div className="flex space-x-3 mt-3">
                <button>Facebook</button>
                <button>Instagram</button>
                <button>WhatsApp</button>
              </div>
            </div>
          </div>
        </div>
        <div className="text-center mt-8 text-yellow-700">&copy; 2023 Moovie. All Rights Reserved.</div>
      </footer>
    );
  }
  