
@FunctionalInterface
public interface Generate {
	public default void cube(int n) {
		System.out.println(n*n*n);
	}
	public void square(int no);	
}

@FunctionalInterface
interface Convert extends Generate{
	//public String change(String str, int choice);
	public default void cube(int n, int p) {
		System.out.println(n*n*n);
	}
	public void square(int no);
}