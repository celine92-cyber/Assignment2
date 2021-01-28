using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace Assignment2.Models
{
    public class CalculatorModel
    {
        //Set required & data validation for all inputs
        [Required][Range(0,100,ErrorMessage ="Number must be between 0 and 100")]
        public double Assignments { get; set; }
        [Required][Range(0, 100, ErrorMessage = "Number must be between 0 and 100")]
        public double GroupProjects { get; set; }
        [Required][Range(0, 100, ErrorMessage = "Number must be between 0 and 100")]
        public double Quizzes { get; set; }
        [Required][Range(0, 100, ErrorMessage = "Number must be between 0 and 100")]
        public double Exams { get; set; }
        [Required][Range(0, 100, ErrorMessage = "Number must be between 0 and 100")]
        public double Intex { get; set; }

    }
}
