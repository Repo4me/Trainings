<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
	pageEncoding="ISO-8859-1"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
<title>Insert title here</title>
</head>
<body>
	<%
		String errmsg = (String) request.getAttribute("errorMessge");
		if (errmsg != null) {
			out.println("<div style='color:blue; font-weight: bold; margin: 30px 0px;'>" + errmsg + "</div>");
		}
	%>
	<form action="/login" method="post">
		Enter Username : <input type="text" name="username"> Enter
		Password : <input type="text" name="password"> <input
			type="submit">
	</form>
</body>
</html>