
#include <iostream>
#include <string>

namespace Raven {

class Engine {
private:
    std::string name = "RAVEN Engine";
    std::string version = "0.1.0";

public:
    void initialize() {
        std::cout << "\n";
        std::cout << "============================\n";
        std::cout << "       RAVEN ENGINE\n";
        std::cout << "============================\n";

        std::cout << "Version: " << version << "\n";
        std::cout << "Runtime: Native C++\n";
        std::cout << "Architecture: Modular\n";

        std::cout << "\nEngine initialized.\n";
        std::cout << "Rendering systems: Pending integration\n";
        std::cout << "Physics system: Pending integration\n";
        std::cout << "Scene system: Pending integration\n";

        std::cout << "\nWelcome to " << name << ".\n";
    }
};

}

int main() {
    Raven::Engine engine;
    engine.initialize();

    return 0;
}
