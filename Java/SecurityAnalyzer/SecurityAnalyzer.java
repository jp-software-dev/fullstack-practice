import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

/**
 * Descripcion del Problema:
 * Analizar un registro de intentos de inicio de sesion y detectar direcciones IP sospechosas
 * que hayan superado un limite de intentos fallidos (posible ataque de fuerza bruta).
 * 
 * Solucion:
 * 1. Iterar sobre la lista de intentos de login.
 * 2. Usar un HashMap para contar los fallos por cada IP (O(1) para insercion y busqueda).
 * 3. Iterar sobre el mapa resultante para filtrar y devolver las IPs que superen el limite.
 * 
 * Complejidad:
 * - Temporal: O(n) donde n es el numero total de intentos de login.
 * - Espacial: O(u) donde u es el numero de IPs unicas almacenadas en el mapa.
 */

// Clase que representa el modelo de datos (POJO)
class LoginAttempt {
    String ipAddress;
    boolean isSuccess;

    public LoginAttempt(String ipAddress, boolean isSuccess){
        this.ipAddress = ipAddress;
        this.isSuccess = isSuccess;
    }
}

public class SecurityAnalyzer {
    
    public List<String> getSuspiciousIps(List<LoginAttempt> attempts, int maxFailures) {
        Map<String, Integer> failureCount = new HashMap<>();

        // Contador de los fallos por cada IP
        for (LoginAttempt attempt : attempts) {
            if (!attempt.isSuccess) {
                // Aqui getOrDefault sirve para obtener el valor actual del contador de fallos para la IP, o 0 si no existe
                failureCount.put(attempt.ipAddress, failureCount.getOrDefault(attempt.ipAddress, 0) + 1);
            }
        }

        // Aqui se hace el filtro de las IPs que superan el limite de fallos
        List<String> blockedIps = new ArrayList<>();
        for (Map.Entry<String, Integer> entry : failureCount.entrySet()) {
            if (entry.getValue() >= maxFailures) {
                blockedIps.add(entry.getKey());
            }
        }

        return blockedIps;
    }
    
    // Este es el metodo main para probar este codigo
    public static void main(String[] args) {
        List<LoginAttempt> logs = new ArrayList<>();
        // Aqui la ip 192.168.1.10 ya tiene los 3 errores, por lo que deberia ser bloqueada
        logs.add(new LoginAttempt("192.168.1.10", false));
        logs.add(new LoginAttempt("10.0.0.5", true));
        logs.add(new LoginAttempt("192.168.1.10", false));
        logs.add(new LoginAttempt("192.168.1.10", false)); 
        logs.add(new LoginAttempt("172.16.0.8", false));

        SecurityAnalyzer analyzer = new SecurityAnalyzer();
        List<String> suspicious = analyzer.getSuspiciousIps(logs, 3);

        System.out.println("IPs Bloqueadas por seguridad: " + suspicious);
    }
}