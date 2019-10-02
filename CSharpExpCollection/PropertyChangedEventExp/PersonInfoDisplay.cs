using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;

namespace PropertyChangedEventExp
{
    public partial class PersonInfoDisplay : Form
    {
        public PersonInfoDisplay()
        {
            InitializeComponent();
        }

        private void PersonInfoDisplay_Load(object sender, EventArgs e)
        {
            // creating Person object
            Person person = new Person();
            person.Name = "Rahul";
            person.Age = 25;
            // adding event handler for Person class property change event
            person.PropertyChanged += Person_PropertyChanged;

            pgPersonInfo.SelectedObject = person;
        }

        private void Person_PropertyChanged(object sender, PropertyChangedEventArgs e)
        {
            if (e.PropertyName == "Name")
                MessageBox.Show("Person " + e.PropertyName + " changed to " + ((Person)sender).Name);
            else
                MessageBox.Show("Person " + e.PropertyName + " changed to " + ((Person)sender).Age);
        }
    }
}
