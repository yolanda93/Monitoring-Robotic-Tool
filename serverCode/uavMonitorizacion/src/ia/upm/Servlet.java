package ia.upm;

import java.io.BufferedReader;
import java.io.FileReader;
import java.io.IOException;
import java.io.File;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

/**
 * Servlet implementation class Servlet
 */
@WebServlet("/Servlet")
public class Servlet extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public Servlet() {
        super();
        // TODO Auto-generated constructor stub
    }
    private String readFile( String file ) throws IOException {
        BufferedReader reader = new BufferedReader( new FileReader (file));
        String         line = null;
        StringBuilder  stringBuilder = new StringBuilder();
        String         ls = System.getProperty("line.separator");

        while( ( line = reader.readLine() ) != null ) {
            stringBuilder.append( line );
            stringBuilder.append( ls );
        }

        return stringBuilder.toString();
    }

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		   System.out.println("server received the following message from client: " + request.getParameter("errorType"));
		   response.setContentType("image/svg+xml");
		   File svgFile = new File ("C:/Users/Yolanda/Desktop/graphs/graphFile.svg");
		   response.getWriter().write(this.readFile("C:/Users/Yolanda/Desktop/graphs/graphFile.svg"));
		 //  response.setContentType("text/xml");
		 //  response.getWriter().println("<responseFromServer>hi "+request.getParameter("name")+"</responseFromServer>");
		   System.out.println("server replied the following message to client: hi "+ response.getCharacterEncoding());
	}

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
	    System.out.println("server received the following message from client: " + request.getParameter("errorType"));
	    response.setContentType("text/xml");
	    response.getWriter().println(request.getParameter("errorType"));
	    System.out.println("server replied succesful");
	}

}
