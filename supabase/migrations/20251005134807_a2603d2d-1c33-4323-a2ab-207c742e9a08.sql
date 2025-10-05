-- Fix Critical Privilege Escalation Vulnerability in user_roles
-- Drop the overly permissive policy
DROP POLICY IF EXISTS "Admins can manage all roles" ON public.user_roles;

-- Create granular policies for user_roles
-- Users can view their own role
CREATE POLICY "Users can view their own role"
ON public.user_roles
FOR SELECT
USING (auth.uid() = user_id);

-- Admins can view all roles
CREATE POLICY "Admins can view all roles"
ON public.user_roles
FOR SELECT
USING (public.has_role(auth.uid(), 'admin'::app_role));

-- Block all direct INSERT operations (only triggers can insert)
CREATE POLICY "Block direct role inserts"
ON public.user_roles
FOR INSERT
WITH CHECK (false);

-- Only admins can update roles
CREATE POLICY "Only admins can update roles"
ON public.user_roles
FOR UPDATE
USING (public.has_role(auth.uid(), 'admin'::app_role))
WITH CHECK (public.has_role(auth.uid(), 'admin'::app_role));

-- Only admins can delete roles
CREATE POLICY "Only admins can delete roles"
ON public.user_roles
FOR DELETE
USING (public.has_role(auth.uid(), 'admin'::app_role));

-- Add explicit UPDATE/DELETE policies to quote_requests
-- Only admins can update quote requests
CREATE POLICY "Only admins can update quote requests"
ON public.quote_requests
FOR UPDATE
USING (public.has_role(auth.uid(), 'admin'::app_role))
WITH CHECK (public.has_role(auth.uid(), 'admin'::app_role));

-- Only admins can delete quote requests
CREATE POLICY "Only admins can delete quote requests"
ON public.quote_requests
FOR DELETE
USING (public.has_role(auth.uid(), 'admin'::app_role));