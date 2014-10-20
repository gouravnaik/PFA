class Customer < ActiveRecord::Base
   attr_accessible :name, :address, :mobile_no
   has_many :pets, :dependent => :destroy

   validates :name , :presence=>  {:message => "Name can't be blank"} 
   validates :address , :presence=>  {:message => "Address can't be blank"} 
   validates :mobile_no,:presence => true,
                 :numericality => true,
                 :uniqueness => {:message=>"Already Registered"},
                 :length => { :minimum => 10, :maximum => 10 }
end
