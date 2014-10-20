class Pet < ActiveRecord::Base
	attr_accessible :name, :color, :sterilized, :tax, :dob, :tax_paid_on, :medical_history, :age, :customer_id
	belongs_to :customer 

	# validates :name , :presence=>  {:message => "Name can't be blank"}  
      # validates :color , :presence=>  {:message => "Color can't be blank"}
      # validates :tax , :presence=>  {:message => "Tax can't be blank"}
      # validates :age , :presence=>  {:message => "Age can't be blank"}
      # validates :sterilized , :presence=>  {:message => "Please fill Sterilized or Not"}
      # validates :dob , :presence=>  {:message => "DOB can't be blank"}
      # validates :tax_paid_on , :presence=>  {:message => "Tax Paid On can't be blank"}
	def self.search(search)
		if search
			where('lower(name) LIKE ?', "%#{search}%".downcase)
		end
	end
end
