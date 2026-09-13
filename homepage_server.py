import http.server
import socketserver

PORT = 4650

# Define directory
DIRECTORY = "."


class CustomHandler(http.server.SimpleHTTPRequestHandler):

  def __init__(self, *args, **kwargs):
    super().__init__(*args, directory=DIRECTORY, **kwargs)


with socketserver.TCPServer(("", PORT), CustomHandler) as httpd:
  print(f"Glowstone homepage server running on port http://localhost:{PORT}")
  print("Press Ctrl+C to stop")
  try:
    httpd.serve_forever()
  except KeyboardInterrupt:
    print("\nServidor finalizado.")
