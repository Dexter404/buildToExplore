namespace PropertyChangedEventExp
{
    partial class PersonInfoDisplay
    {
        /// <summary>
        /// Required designer variable.
        /// </summary>
        private System.ComponentModel.IContainer components = null;

        /// <summary>
        /// Clean up any resources being used.
        /// </summary>
        /// <param name="disposing">true if managed resources should be disposed; otherwise, false.</param>
        protected override void Dispose(bool disposing)
        {
            if (disposing && (components != null))
            {
                components.Dispose();
            }
            base.Dispose(disposing);
        }

        #region Windows Form Designer generated code

        /// <summary>
        /// Required method for Designer support - do not modify
        /// the contents of this method with the code editor.
        /// </summary>
        private void InitializeComponent()
        {
            this.pgPersonInfo = new System.Windows.Forms.PropertyGrid();
            this.SuspendLayout();
            // 
            // pgPersonInfo
            // 
            this.pgPersonInfo.Location = new System.Drawing.Point(12, 12);
            this.pgPersonInfo.Name = "pgPersonInfo";
            this.pgPersonInfo.PropertySort = System.Windows.Forms.PropertySort.Categorized;
            this.pgPersonInfo.Size = new System.Drawing.Size(315, 426);
            this.pgPersonInfo.TabIndex = 0;
            // 
            // PersonInfoDisplay
            // 
            this.AutoScaleDimensions = new System.Drawing.SizeF(8F, 16F);
            this.AutoScaleMode = System.Windows.Forms.AutoScaleMode.Font;
            this.ClientSize = new System.Drawing.Size(339, 450);
            this.Controls.Add(this.pgPersonInfo);
            this.Name = "PersonInfoDisplay";
            this.Text = "PersonInfoDisplay";
            this.Load += new System.EventHandler(this.PersonInfoDisplay_Load);
            this.ResumeLayout(false);

        }

        #endregion

        private System.Windows.Forms.PropertyGrid pgPersonInfo;
    }
}

