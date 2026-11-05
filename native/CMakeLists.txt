
cmake_minimum_required(VERSION 3.16)

project(UvaderEngine
    VERSION 0.1.0
    LANGUAGES CXX
)

set(CMAKE_CXX_STANDARD 17)
set(CMAKE_CXX_STANDARD_REQUIRED ON)

add_executable(uvader_native
    src/main.cpp
)

target_include_directories(uvader_native PRIVATE include)

if(MSVC)
    target_compile_options(uvader_native PRIVATE /W4)
else()
    target_compile_options(uvader_native PRIVATE -Wall -Wextra)
endif()
