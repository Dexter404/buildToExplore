using System.ComponentModel;

namespace PropertyChangedEventExp
{
    class Person : INotifyPropertyChanged
    {
        private string name;
        [Description("Name of the person")]
        public string Name
        {
            get { return name; }
            set
            {
                name = value;

                // fire event on property change
                //if(PropertyChanged != null)
                //{
                //    PropertyChanged(this, new PropertyChangedEventArgs("Name"));
                //}
                PropertyChanged?.Invoke(this, new PropertyChangedEventArgs("Name"));
            }
        }

        private int age;
        [Description("Age of the person")]
        public int Age
        {
            get { return age; }
            set
            {
                age = value;

                // fire event on property change
                //if(PropertyChanged != null)
                //{
                //    PropertyChanged(this, new PropertyChangedEventArgs("Age"));
                //}
                PropertyChanged?.Invoke(this, new PropertyChangedEventArgs("Age"));
            }
        }

        #region INotifyPropertyChanged

        public event PropertyChangedEventHandler PropertyChanged;

        #endregion
    }
}
