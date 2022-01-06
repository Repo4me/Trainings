import java.util.Comparator;

public class Test {


	public static void main(String[] args) {

		Process p3 = () -> System.out.println("Process from lambda expression");
		p3.display();

		Generate sq = n -> System.out.println(n*n);
		sq.square(4);
		sq.cube(6);
		//Convert c1 = (word, ch)-> (ch==1) ?  word.toUpperCase() : word.toLowerCase();
//		Convert c1 = (String word, int ch)-> {
//			if(ch==1) {
//			
//				 word.toUpperCase() ;
//				return word.substring(4);
//				 
//			}
//			
//			else 
//				return word.toLowerCase();
		//};
		//System.out.println(c1.change("Shalini", 1));
		
	}
}

