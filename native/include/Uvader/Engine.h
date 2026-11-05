
#pragma once

#include <iostream>
#include <string>

namespace Uvader {

class Engine {
private:
    std::string name = "Uvader Engine";
    std::string version = "0.1.0";

public:
    void initialize() const {
        std::cout << "\n";
        std::cout << "============================\n";
        std::cout << "       UVADER ENGINE\n";
        std::cout << "============================\n";

        std::cout << "Version: " << version << "\n";
        std::cout << "Runtime: Native C++\n";
        std::cout << "Architecture: Modular\n";
        std::cout << "\nEngine initialized.\n";
        std::cout << "2D Renderer: Planned\n";
        std::cout << "3D Renderer: Planned\n";
        std::cout << "Physics: Planned\n";
        std::cout << "\nWelcome to " << name << ".\n";
    }
};

}
