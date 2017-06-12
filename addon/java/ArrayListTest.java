import java.util.ArrayList;

public class ArrayListTest {

    public static void main(String[] args) {        
        // 创建ArrayList
        ArrayList<String> list = new ArrayList<String>();

        list.add("1");
        list.add("2");
        list.add("3");
        list.add("4");
				list.add(3, "5");
				
				System.out.println(list.toString());
    }
}