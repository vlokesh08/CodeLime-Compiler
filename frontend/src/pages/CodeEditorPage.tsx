import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import axios from "axios";
import { useState } from "react";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
const CodeEditorPage = () => {
  const [code, setCode] = useState(``);
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const [lang, setLang] = useState("Python");
  const handleClick = async (e) => {
    e.preventDefault();
    console.log(code, input, lang);
    const data = await axios.post("http://localhost:3000/compile", {
      code,
      input,
      lang,
      headers: {
        "Content-Type": "application/json",
      },
      
    });

    setOutput(data.data.output);
  };

  const handleChange = (value : any) => {
    if (value === "Cpp") {
      setCode(`
      #include<bits/stdc++.h>

      using namespace std;
      
      int main(){
          cout<<"Hello World";
          return 0;
      }
      `);
    } else if (value === "Java") {
      setCode(`
      import java.util.*;
      import java.lang.*;
      
      class Main {
          public static void main(String[] args) {
              System.out.println("Hello World");
          }
      }
      `);
    } else if (value === "Python") {
      setCode(`
      print("Hello World")
      `);
    }
  };

  return (
    <div className=" justify-between align-middle p-4">
      <a href="/">
        <h1 className="text-2xl font-manrope">CodeLime</h1>
      </a>
      <div className="p-4 align-middle">
        <Select
          onValueChange={(value) => {
            handleChange(value)
            setLang(value);
          }}
        >
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Language" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>Languages</SelectLabel>
              <SelectItem
                value="Cpp"
                onChange={() => {
                  console.log("clicked");
                }}
              >
                C++
              </SelectItem>
              <SelectItem
                value="Java"
                onClick={() => {
                  setLang("Java");
                }}
              >
                Java
              </SelectItem>
              <SelectItem
                value="Python"
                onClick={() => {
                  setLang("Python");
                }}
              >
                Python
              </SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>
      <div className="flex flex-row justify-evenly p-4 align-middle">
        <Textarea
          value={code}
          onChange={(e) => {
            setCode(e.target.value);
          }}
        />
        <div className="p-4 justify-between">
          <Textarea
            className="m-3 max-w-max"
            value={input}
            placeholder="Enter the input"
            onChange={(e) => {
              setInput(e.target.value);
            }}
          />
          <Textarea
            className="m-3"
            value={output}
            placeholder="Output"
            onChange={(e) => {
              setOutput(e.target.value);
            }}
          />
        </div>
      </div>
      <Button onClick={handleClick}>Compile</Button>
    </div>
  );
};

export default CodeEditorPage;
